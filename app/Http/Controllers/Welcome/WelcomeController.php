<?php

namespace App\Http\Controllers\Welcome;


use Image;
use Auth;
use Hash;
use Str;
use Artisan;
use Session;
use Carbon\Carbon;
use App\Models\Country;
use App\Models\Post;
use App\Models\Media;
use App\Models\PostExtra;
use App\Models\User;
use App\Models\Attribute;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class WelcomeController extends Controller
{
  
    
	public function geo_filter($id){

      $datas=Country::where('parent_id',$id)->get();

      $geoData =View('geofilter',compact('datas'))->render();

       return Response()->json([
              'success' => true,
              'geoData' => $geoData,
            ]);
    }
    
    public function imageView(Request $r){
        if($r->imageUrl && is_numeric($r->weight) && is_numeric($r->height)){
          $image = Image::make($r->imageUrl)->fit($r->weight,$r->height)->response();
        }else{
          $image = Image::make('public/medies/noimage.jpg')->fit(200,200)->response(); 
        }
        return $image;
    }
    
    public function imageView2(Request $r,$template=null,$image=null){
        $weight=null;
        $height=null;
        
        if(is_numeric($r->w)){
          $weight=$r->w;  
        }
        if(is_numeric($r->h)){
          $height=$r->h;  
        }
        
        $filePath='public/medies/noimage.jpg';
        
        if($image){
            $file =Media::where('file_rename',$image)->select(['file_url'])->first();
            if($file){
                $filePath = $file->file_url;
            }
        }
        
        
        // if($template=='s-profile'){
            
        //     if($image && $image!='profile.png' && $file){
        //         $filePath = $file->file_url;
        //     }else{
        //         $filePath ='public/medies/profile.png';
        //     }
        // }
        
        $mImage =Image::make($filePath);
        if($weight && $height){
            $mImage=$mImage->fit($weight,$height);
        }
        $mImage=$mImage->response();
        
        return $mImage;
    }
    public function siteMapXml(Request $r){
        
      $pages = Post::latest()->where('type',0)->where('status','active')->select(['slug','updated_at','status'])->limit(200)->get();
      $posts = Post::latest()->where('type',1)->where('status','active')->select(['slug','updated_at','status'])->limit(500)->get();
      $products = Post::latest()->where('type',2)->where('status','active')->select(['slug','updated_at','status'])->limit(300)->get();
      
      return response()->view('siteMap',compact('pages','posts','products'))->header('Content-Type', 'text/xml');
    }
    public function language($lang=null){
      if($lang){
          Session::put('lang',$lang);
      }else{
          Session::put('lang','en');
      }
      return redirect()->back();
    }

    public function index(Request $r){
        
      return Inertia::render('Welcome', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => 11.0,
                'phpVersion' => 8.2,
            ]);

    	return view(welcomeTheme().'index',compact('latestServices','latestPosts'));
    }

    public function serviceCategory($slug){
      $category =Attribute::latest()->where('type',0)->where('slug',$slug)->first();
      if(!$category){
        return abort('404');
      }

      $services = Post::whereHas('ctgServices',function($q) use($category){
        $q->where('reff_id',$category->id);
      })
      ->where(function($qq){
        $qq->where('status','active');
      })
      ->select(['id','name','slug','addedby_id','created_at','short_description'])
      ->whereDate('created_at','<=',date('Y-m-d'))
      ->paginate(12);

      return view(welcomeTheme().'services.categoryServices',compact('category','services'));
    }

    public function serviceView($slug){
      $service =Post::latest()->where('type',3)->where('slug',$slug)->first();
      if(!$service){
        return abort('404');
      }

      return view(welcomeTheme().'services.serviceView',compact('service'));
    }

    public function blogCategory($slug){
      $category =Attribute::latest()->where('type',6)->where('slug',$slug)->first();
      if(!$category){
        return abort('404');
      }

      $posts = $category->activePosts()->latest()
      ->select(['id','name','slug','short_description','addedby_id','created_at'])
      ->paginate(10);

      return view(welcomeTheme().'blogs.categoryPosts',compact('category','posts'));
    }

    public function blogTag($slug){
      $tag =Attribute::latest()->where('type',7)->where('slug',$slug)->first();
      if(!$tag){
        return abort('404');
      }

      $posts = Post::whereHas('tagPosts',function($q) use($tag){
        $q->where('reff_id',$tag->id);
      })
      ->where(function($qq){
        $qq->where('status','active');
      })
      ->select(['id','name','slug','short_description','addedby_id','created_at'])
      ->whereDate('created_at','<=',date('Y-m-d'))
      ->paginate(10);

      return view(welcomeTheme().'blogs.tagPosts',compact('tag','posts'));
    }

    public function blogAuthor($id,$slug){
      $author =User::find($id);
      if(!$author){
        return abort('404');
      }
      $posts =$author->posts()->latest()->where('type',1)->where('status','active')
      ->select(['id','name','slug','short_description','addedby_id','created_at'])
      ->whereDate('created_at','<=',date('Y-m-d'))
      ->paginate(10);
      return view(welcomeTheme().'blogs.authorPosts',compact('author','posts'));

    }

    public function blogView($slug){
      $post =Post::where('type',1)->where('slug',$slug)->first();
      if(!$post){
        return abort('404');
      }

      $post->formatted_created_at = $post->created_at->format('M d, Y');
      $post->image_url = asset(str_replace('public/','',$post->image()));
      $userInfo=[];
      if($post->user){
        $userInfo=array(
          'name'=>$post->user->name,
          'image_url'=>asset(str_replace('public/','',$post->user->image())),
        );
        unset($post->user->imageFile);
      }
      $post->user_info= $userInfo;
      unset($post->imageFile);
      unset($post->user);

      $relatedPosts=Post::latest()->where('type',1)->where('status','active')
      ->select(['id','name','slug','short_description','addedby_id','created_at'])
      ->whereDate('created_at','<=',date('Y-m-d'))
      ->limit(3)
      ->get();

      $relatedPosts->transform(function ($post) {
          $post->formatted_created_at = $post->created_at->format('M d');
          $post->image_url = asset(str_replace('public/','',$post->image()));
          $userInfo=[];
          if($post->user){
            $userInfo=array(
              'name'=>$post->user->name,
              'image_url'=>asset(str_replace('public/','',$post->user->image())),
            );
            unset($post->user->imageFile);
          }
          $post->user_info= $userInfo;
          unset($post->imageFile);
          unset($post->user);
          return $post;
      });

      return Inertia::render('Blogs/blog-details',compact('post','relatedPosts'));

      return view(welcomeTheme().'blogs.blogView',compact('post','relatedPosts','comments'));

    }

    public function blogSearch(Request $r){
      $check = $r->validate([
          'search' => 'required|max:100',
      ]);
      
      $posts =Post::latest()->where('type',1)->where('status','active')
      ->where(function($q) use ($r) {
        if($r->search){
          $q->where('name','LIKE','%'.$r->search.'%');
        }

      })
      ->select(['id','name','slug','short_description','addedby_id','created_at'])
      ->whereDate('created_at','<=',date('Y-m-d'))
      ->paginate(10)->appends([
        'search'=>$r->search,
      ]);

      return view(welcomeTheme().'blogs.blogSearch',compact('posts','r'));

    }

    public function blogComments(Request $r,$slug){
      $post =Post::where('type',1)->where('slug',$slug)->first();
      if(!$post){
        return abort('404');
      }

      $check = $r->validate([
          'name' => 'required|max:100',
          'email' => 'required|max:100',
          'website' => 'required|max:100',
          'comment' => 'required|max:1000',
      ]);

      $comments =new Review();

      if(Auth::check()){
      $comments->addedby_id=Auth::id();
      }
      $comments->src_id=$post->id;
      $comments->type=1;
      $comments->name=$r->name;
      $comments->email=$r->email;
      $comments->website=$r->website;
      $comments->content=$r->comment;
      $comments->save();

      Session()->flash('success','Your Comments successfully Submitted.');

      return back();


    }


    public function pageView($slug){
    
      $page =Post::latest()->whereIn('type',[0,1])->where('slug',$slug)->first();

      if(!$page){
        return abort('404');
      }
      
      

      if($page->type==1){
          
          $post =$page;
          
          $relatedPosts =$post->relatedPosts()->limit(3)->select(['id','name','slug','short_description','addedby_id','created_at'])->get();
          $comments =$post->postComments()->where('status','active')->select(['id','name','content','created_at'])->paginate(10);
          
          return view(welcomeTheme().'blogs.blogView',compact('post','relatedPosts','comments'));
      }
      //If deferent Design or Condition Page Return by ID.

      //Font Home Page
      if($page->template=='Front Page'){
        return redirect()->route('index');
      }

      //Contact Us Page
      if($page->template=='Contact Us'){

        return Inertia::render('contactUs',compact('page'));
        return view(welcomeTheme().'pages.contact',compact('page'));
      }

      //About Us Page
      if($page->template=='About Us'){

        return Inertia::render('aboutUs',compact('page'));
        return view(welcomeTheme().'pages.about',compact('page'));
      }
      
      //Clients Page
      if($page->template=='All Clients'){
        return view(welcomeTheme().'pages.clients',compact('page'));
      }

      //Latest Blog Page
      if($page->template=='Latest Blog'){
        $posts = Post::latest()->where('type',1)->where('status','active')
        ->select(['id','name','slug','short_description','addedby_id','created_at'])
        ->whereDate('created_at','<=',date('Y-m-d'))
        ->paginate(10);

        $posts->getCollection()->transform(function ($post) {
            $post->formatted_created_at = $post->created_at->format('M d');
            $post->image_url = asset(str_replace('public/','',$post->image()));
            $userInfo=[];
            if($post->user){
              $userInfo=array(
                'name'=>$post->user->name,
                'image_url'=>asset(str_replace('public/','',$post->user->image())),
              );
              unset($post->user->imageFile);
            }
            $post->user_info= $userInfo;
            unset($post->imageFile);
            unset($post->user);
            return $post;
        });

        return Inertia::render('Blogs/blog',compact('posts','page'));
        return view(welcomeTheme().'blogs.latestBlogs',compact('posts','page'));
      }

      //Latest Services Page
      if($page->template=='Latest Services'){
        $services = Post::latest()->where('type',3)->where('status','active')
        ->select(['id','name','slug','short_description','addedby_id','created_at'])
        ->whereDate('created_at','<=',date('Y-m-d'))
        ->paginate(12);
        return Inertia::render('services',compact('services','page'));
        return view(welcomeTheme().'services.latestServices',compact('services','page'));
      }

      return Inertia::render('pageView',compact('page'));
      return view(welcomeTheme().'pages.pageView',compact('page'));

    }

    public function contactMail(Request $r){
      //return $r;
      $check = $r->validate([
          'name' => 'required|max:100',
          'email' => 'required|max:100',
          'subject' => 'required|max:100',
          'message' => 'nullable|max:500',
      ]);

      // if(general()->mail_status && general()->mail_from_address){
      //       //Mail Data
      //       $datas =array('r'=>$r);
      //       $template ='mails.ContactMail';
      //       $toEmail =general()->mail_from_address;
      //       $toName =general()->mail_from_name;
      //       $subject ='Contact Mail Form '.general()->title;
        
      //       sendMail($toEmail,$toName,$subject,$datas,$template);
      //   }

      Session()->flash('success','Your form send successfully done. We are response as soon as possible.');
      return back();
    }

    public function search(Request $r){
      
      if($r->search){

        $posts =Post::where('status','active')
        ->where(function($q) use($r){
          $q->where('search_key','LIKE','%'.$r->search.'%');
        })
        ->paginate(24);

      }else{
        $posts = array();
      }

      return view(welcomeTheme().'search');

    }

    public function subscribe(Request $r){

      if(filter_var($r->email, FILTER_VALIDATE_EMAIL)){
        $subscribe =PostExtra::latest()->where('type',1)->where('name',$r->email)->first();

        if(!$subscribe){
          
            $subscribe =new PostExtra();
            $subscribe->type=1;
            $subscribe->name=$r->email;
            $subscribe->save();
          $status=true;
          $message ='<p style="color: #009688;"><span>Success:</span> You Are Successfully Subsribe.</p>';
        }else{
          $status=true;
          $message ='<p style="color: #ffc107;"><span>Note:</span> You Are Already Subsribe.Thank You.</p>';
        }


      }else{
        $status=false;
        $message ='<p style="color: #ff5722;"><span>Error:</span> Email Are Not validated</p>';
      }

      if(request()->ajax()){
        
        return Response()->json([
                'success' => $status,
                'message' => $message,
              ]);
      }

      Session()->flash($status?'success':'error',$message);
      return redirect()->back();

    }





}
