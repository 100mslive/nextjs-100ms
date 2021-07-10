import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicConferenceWrapper = dynamic(()=> import('../components/conferenceWrapper'),{ssr:false})

const ConferencePage = () => {
        return (
            <>
                <Head>
                    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
                </Head>
                <DynamicConferenceWrapper/>
            </>
    )
}

export default ConferencePage;
