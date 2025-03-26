import React from 'react'

const DocsPage = async ({ params }: { params: Promise<{ url: string [] }> }) => {
    const { url } = await params;
    if (url?.length === 2) {
        return <div>
            <center>
                <h1>
                    Feature {url[0]} of Concept {url[1]}
                </h1>
            </center>
        </div>
    }
     else if (url?.length === 1) {
        return <div>
            <center>
                <h1>
                    Feature {url[0]}
                </h1>
            </center>
        </div>
    }
    return (
        <div>Docs HomePage</div>
    )
}

export default DocsPage