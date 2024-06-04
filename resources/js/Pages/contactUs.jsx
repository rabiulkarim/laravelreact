import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// route('contactMail') use for contact form Sumit
// Post Method

export default function contactUs({ page }) {
    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submit = (data, e) => {
        e.preventDefault();
        const form = e.target;
        const contactMailData = data;

        console.log(contactMailData);

        setSuccessMsg("Successfull Data Submited");

        // post(route('contactMail'));

        form.reset();
    };

    const canonicalLink =
        page && page.slug
            ? route("pageView", page.slug)
            : route("pageView", "no-title");
    return (
        <MainLayout>
            <Head>
                <title>{page.name}</title>
                <meta name="title" property="og:title" content={page.name} />
                <meta
                    name="description"
                    property="og:description"
                    content="Thi si meta description Text"
                />
                <meta
                    name="keyword"
                    property="og:keyword"
                    content="This is mete keyword text"
                />
                <meta name="image" property="og:image" content="this is logo" />
                <meta name="url" property="og:url" content={canonicalLink} />
                <link rel="canonical" href={canonicalLink} />
            </Head>
            <section className="pt-8 pt-md-0 border-bottom bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
                            {successMsg === "" ? null : (
                                <p className="text-green-500 text-center">
                                    {successMsg}
                                </p>
                            )}

                            <form onSubmit={handleSubmit(submit)}>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Your Email"
                                        {...register("name", {
                                            required: "Name is reqrired",
                                            maxLength: {
                                                value: 100,
                                                message:
                                                    "Your name must be at max number 100 characters",
                                            },
                                        })}
                                    />
                                    {errors.name && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        {...register("email", {
                                            required:
                                                "Email Address is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message:
                                                    "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label>Subject</label>
                                    <input
                                        className="form-control"
                                        name="subject"
                                        placeholder="Enter Subject"
                                        {...register("subject", {
                                            required: "subject is reqrired",
                                            maxLength: {
                                                value: 100,
                                                message:
                                                    "Your name must be at max number 100 characters",
                                            },
                                        })}
                                    />
                                    {errors.subject && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            {errors.subject.message}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label>Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Enter Write Message"
                                        {...register("message", {
                                            required: "message is reqrired",
                                            maxLength: {
                                                value: 100,
                                                message:
                                                    "Your name must be at max number 100 characters",
                                            },
                                        })}
                                    ></textarea>
                                    {errors.message && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            {errors.message.message}
                                        </p>
                                    )}
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
