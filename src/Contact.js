import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import "./App.css";

class Contact extends Component {
  state = {
    from_name: "",
    reply_to: "",
    message_html: "",
    loading: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loadingSpinner = () => (
    <div>
      <i className="fa fa-spinner fa-spin" style={{ fontSize: "48px", color: "black" }}></i> Loading...
    </div>
  );

  handleSubmit = e => {
    e.preventDefault();

    const { from_name, reply_to, message_html } = this.state;

    let templateParams = {
      from_name: from_name,
      reply_to: reply_to,
      message_html: message_html
    };
    this.setState({loading:true}, () =>{
    emailjs
      .send(
        "brodie_carlisle",
        "custom_template",
        templateParams,
        "user_bjH7D8bFr92WQXe1x7snX"
      )
      .then(
        (response) => {
          this.setState({loading:false})
          alert('Thank you for your Email!')
          console.log("SUCCESS!", response.status, response.text);
        },
        (error)=> {
          this.setState({loading:false})
          alert('EMAIL FAILED TO SEND')
          console.log("FAILED...", error);
        }
      );
      
    })
    this.setState({
      from_name: "",
      reply_to: "",
      message_html: "",
    });
    // console.log(this.state.loading)
  };

  render() {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter Name"
            name="from_name"
            required
            value={this.state.from_name}
            onChange={e => this.handleChange(e)}
          />
          <br />{this.state.loading ? this.loadingSpinner(): null}
          <input
            type="email"
            placeholder="email address"
            name="reply_to"
            required
            value={this.state.reply_to}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <textarea
            rows="4"
            cols="50"
            placeholder="type message"
            name="message_html"
            required
            value={this.state.message_html}
            onChange={e => this.handleChange(e)}
          ></textarea>
          <br />
          <button className="button" >Submit</button>
        </form>
        
      </div>
    );
  }
}
export default Contact;
