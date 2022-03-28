import React from "react";
import  "./Student.css";

export default function Student(){
    return(
        <>
            <div className="main_div">

            <h2 className="year_heading">Second Year</h2>
                <div className="year_div">
                    <div className="section_div">
                        <h3 className="section_heading">EN-1</h3>
                        <img src="img/tt1.jpg" className="tt_img">

                        </img>
                    </div>
                    <div className="section_div">
                        <h3 className="section_heading">EN-2</h3>
                        <img src="img/tt.jpg" className="tt_img">

                        </img>
                    </div>
                </div>

            <h2 className="year_heading">Third Year</h2>
                <div className="year_div">
                    <div className="section_div">
                        <h3 className="section_heading">EN-1</h3>
                        <img src="img/tt.jpg" className="tt_img">

                        </img>
                    </div>

                    <div className="section_div">
                        <h3 className="section_heading">EN-2</h3>
                        <img src="img/tt1.jpg" className="tt_img">

                        </img>
                    </div>
                </div>



            <h2 className="year_heading">Fourth Year</h2>
                <div className="year_div">
                    <div className="section_div">
                        <h3 className="section_heading">EN-1</h3>
                        <img src="img/tt1.jpg" className="tt_img">

                        </img>
                    </div>

                    <div className="section_div">
                        <h3 className="section_heading">EN-2</h3>
                        <img src="img/tt.jpg" className="tt_img">

                        </img>
                    </div>
                </div>
            </div>

        </>
    )
}