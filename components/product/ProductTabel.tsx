import React from "react";

function ProductTabel() {
  return (
    <>
      <>
        <ul
          className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tab3"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-home3"
              className="
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
active
    "
              id="tabs-home-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home3"
              role="tab"
              aria-controls="tabs-home3"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-profile3"
              className="
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    "
              id="tabs-profile-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile3"
              role="tab"
              aria-controls="tabs-profile3"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-messages3"
              className="
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    "
              id="tabs-messages-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messages3"
              role="tab"
              aria-controls="tabs-messages3"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContent3">
          <div
            className="tab-pane fade show active"
            id="tabs-home3"
            role="tabpanel"
            aria-labelledby="tabs-home-tab3"
          >
            Tab 1 content button version
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profile3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab3"
          >
            Tab 2 content button version
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messages3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab3"
          >
            Tab 3 content button version
          </div>
        </div>
      </>
    </>
  );
}

export default ProductTabel;
