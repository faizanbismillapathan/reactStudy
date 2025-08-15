import React from 'react';
function Fragment() {
    let openFragment = "<React.Fragment>";
    let closeFragment = "</React.Fragment>";
    let shortFragmentVersion = "<>...</>"
    return <React.Fragment>
        <p>Fragment is just like you have to wrap all you html and css code in opening and closing blank tag is called <strong>Fragment</strong></p>
        <p>In a simple language there must be a single parant element</p>
        <p>Use <br /> <code>import React from 'react'</code>
            <br />
            and wrap yout content between with opening and closing brackets <strong>
                <code>
                    {openFragment}...{closeFragment}
                </code>
            </strong> And the short version of fragment is <strong> <code>{shortFragmentVersion}</code></strong>
        </p>
    </React.Fragment>;
}
export default Fragment;