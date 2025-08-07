import React from 'react'

function TopBar() {
    return (
        <div>
            <div className="flex w-full flex-col justify-between gap-15 px-15 py-15 text-body-md text-gray-100 sm:flex-row sm:items-center md:justify-center md:gap-20 lg:px-0 print:hidden bg-purple-500">
                <p className="leading-120 inline-block text-body-sm">We're reducing our bandwidth prices.</p>
                <a className="flex w-fit items-center gap-10 bg-gray-900 px-10 py-6 text-body-sm text-gray-100" href="/blog/new-bandwidth-pricing-on-render">
                    <span>Learn more</span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none"><path d="M0.875 10.591L0 9.72736L4 5.50009L0 1.28418L0.875 0.40918L5.96591 5.50009L0.875 10.591Z" fill="white"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default TopBar