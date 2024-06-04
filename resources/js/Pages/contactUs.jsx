import MainLayout from '@/Layouts/MainLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

// route('contactMail') use for contact form Sumit 
// Post Method 

export default function contactUs({page}) {

    const { data, setData, errors } = useForm({
        name: '',
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('contactMail'));
    };
    
    const canonicalLink = page && page.slug ? route('pageView', page.slug) : route('pageView', 'no-title');
    return (
        <MainLayout>
            <Head>
                <title>{page.name}</title>
                <meta name="title" property="og:title" content={page.name}/>
                <meta name="description" property="og:description" content="Thi si meta description Text" />
                <meta name="keyword" property="og:keyword" content="This is mete keyword text" />
                <meta name="image" property="og:image" content="this is logo" />
                <meta name="url" property="og:url" content={canonicalLink} />
                <link rel="canonical" href={canonicalLink} />
            </Head>
            <section className="pt-8 pt-md-0 border-bottom bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
                            <form onSubmit={submit}  >
                                <div className="mb-3">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />
                                    <InputError className="mt-2" message={errors.email} />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Enter Subject"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Message</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        name="message"
                                        placeholder="Enter Write Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    {" "}
                                    Sumit
                                </button>
                            </form>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
                            <h2>
                                Located in Los Angeles.
                                <br />
                                <span className="text-success">
                                    Enjoy{" "}
                                    <span data-typed='{"strings": ["cultural diversity", "white sand beaches", "sunny weekends"]}'></span>
                                    .
                                </span>
                            </h2>
                            <p className="fs-lg text-gray-700 mb-6">
                                We picked our office location to maximize our
                                team's enjoyment! LA's best restaurants are
                                within walking distance, as well are some of the
                                finest coffee shops in the world. Come visit us
                                and you'll agree.
                            </p>
                            <div className="d-flex">
                                <div className="pe-5">
                                    <h3 className="text-success mb-0">
                                        <span
                                            data-countup='{"startVal": 0}'
                                            data-to="100"
                                            data-aos
                                            data-aos-id="countup:in"
                                        >
                                            0
                                        </span>
                                        %
                                    </h3>
                                    <p className="text-gray-700 mb-0">
                                        Approval
                                    </p>
                                </div>
                                <div className="border-start border-gray-300"></div>
                                <div className="px-5">
                                    <h3 className="text-success mb-0">
                                        <span
                                            data-countup='{"startVal": 0}'
                                            data-to="85"
                                            data-aos
                                            data-aos-id="countup:in"
                                        >
                                            0
                                        </span>
                                        %
                                    </h3>
                                    <p className="text-gray-700 mb-0">
                                        Sunny days
                                    </p>
                                </div>
                                <div className="border-start border-gray-300"></div>
                                <div className="ps-5">
                                    <h3 className="text-success mb-0">
                                        <span
                                            data-countup='{"startVal": 0}'
                                            data-to="52"
                                            data-aos
                                            data-aos-id="countup:in"
                                        >
                                            0
                                        </span>
                                        /
                                        <span
                                            data-countup='{"startVal": 0}'
                                            data-to="48"
                                            data-aos
                                            data-aos-id="countup:in"
                                        >
                                            0
                                        </span>
                                    </h3>
                                    <p className="text-gray-700 mb-0">
                                        Gender ratio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
