import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formsubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}, My Email id is ${data.email}, My Phone Number is ${data.phone} ,Here is i want to say ${data.msg} `);
  };

  const inputevent = event => {
    const { name, value } = event.target;
    setdata(prevel => {
      return {
        ...prevel,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="md-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputevent}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="md-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputevent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="md-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputevent}
                  placeholder="Mobile number"
                />
              </div>
              <div className="md-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Message
                </label>
                <textarea
                  type="msg"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="msg"
                  value={data.msg}
                  onChange={inputevent}
                  placeholder="name@example.com"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
