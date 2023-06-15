"use client";
import React, { Component } from "react";
export default class Homepage extends Component {
  render() {
    return (
      <div className="container mx-auto space-y-2">
        <h3>Homepage</h3>
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </thead>
        </table>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body bg-slate-300 p-5 rounded shadow">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-bounce">🙏🙏🙏</div>
        <hr />
        <div className="animate-pulse">
          <div className="space-y-2">
            <div className="bg-slate-500 h-2"></div>
            <div className="bg-slate-500 h-2"></div>
            <div className="bg-slate-500 h-2"></div>
          </div>
        </div>
        <hr />
        <div className="animate-spin w-[150px] bg-pink-500">😁😂😀</div>
      </div>
    );
  }
}
