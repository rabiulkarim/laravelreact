import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from "react-hook-form"



export default function AboutUs() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      console.log(watch("example"))

    return (
        <>
        <MainLayout>
            <Head title="About Us" />
            <h1>About Us</h1>
            <form>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </MainLayout>
        </>
    );
}
