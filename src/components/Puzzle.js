import React, { Component } from 'react';

class Puzzle extends Component {
    constructor() {
        super();
        this.state = {
            currentBox: ""
        }
    }
    handleClick = (clickedBox) => {
        this.setState({
            currentBox: clickedBox
        }, () => {
            this.props.currentBox(this.state.currentBox);
        });

        // add class for focus styles
        const pastSelected = document.querySelector('.focus')
        const currentSelected = document.querySelector(`.${clickedBox}`)
        if (pastSelected) {
            pastSelected.classList.remove('focus');
        }
        currentSelected.classList.add('focus');
    }
    render() {
        return (
            <section className="puzzle-flex">
                <div className="puzzle">
                    <div className="quad quad-1">
                        <div className="box box-1" onClick={() => this.handleClick("box-1")}></div>
                        <div className="box box-2" onClick={() => this.handleClick("box-2")}></div>
                        <div className="box box-3" onClick={() => this.handleClick("box-3")}></div>
                        <div className="box box-10" onClick={() => this.handleClick("box-10")}></div>
                        <div className="box box-11" onClick={() => this.handleClick("box-11")}></div>
                        <div className="box box-12" onClick={() => this.handleClick("box-12")}></div>
                        <div className="box box-19" onClick={() => this.handleClick("box-19")}></div>
                        <div className="box box-20" onClick={() => this.handleClick("box-20")}></div>
                        <div className="box box-21" onClick={() => this.handleClick("box-21")}></div>
                    </div>
                    <div className="quad quad-2">
                        <div className="box box-4" onClick={() => this.handleClick("box-4")}></div>
                        <div className="box box-5" onClick={() => this.handleClick("box-5")}></div>
                        <div className="box box-6" onClick={() => this.handleClick("box-6")}></div>
                        <div className="box box-13" onClick={() => this.handleClick("box-13")}></div>
                        <div className="box box-14" onClick={() => this.handleClick("box-14")}></div>
                        <div className="box box-15" onClick={() => this.handleClick("box-15")}></div>
                        <div className="box box-22" onClick={() => this.handleClick("box-22")}></div>
                        <div className="box box-23" onClick={() => this.handleClick("box-23")}></div>
                        <div className="box box-24" onClick={() => this.handleClick("box-24")}></div>
                    </div>
                    <div className="quad quad-3">
                        <div className="box box-7" onClick={() => this.handleClick("box-7")}></div>
                        <div className="box box-8" onClick={() => this.handleClick("box-8")}></div>
                        <div className="box box-9" onClick={() => this.handleClick("box-9")}></div>
                        <div className="box box-16" onClick={() => this.handleClick("box-16")}></div>
                        <div className="box box-17" onClick={() => this.handleClick("box-17")}></div>
                        <div className="box box-18" onClick={() => this.handleClick("box-18")}></div>
                        <div className="box box-25" onClick={() => this.handleClick("box-25")}></div>
                        <div className="box box-26" onClick={() => this.handleClick("box-26")}></div>
                        <div className="box box-27" onClick={() => this.handleClick("box-27")}></div>
                    </div>
                    <div className="quad quad-4">
                        <div className="box box-28" onClick={() => this.handleClick("box-28")}></div>
                        <div className="box box-29" onClick={() => this.handleClick("box-29")}></div>
                        <div className="box box-30" onClick={() => this.handleClick("box-30")}></div>
                        <div className="box box-37" onClick={() => this.handleClick("box-37")}></div>
                        <div className="box box-38" onClick={() => this.handleClick("box-38")}></div>
                        <div className="box box-39" onClick={() => this.handleClick("box-39")}></div>
                        <div className="box box-46" onClick={() => this.handleClick("box-46")}></div>
                        <div className="box box-47" onClick={() => this.handleClick("box-47")}></div>
                        <div className="box box-48" onClick={() => this.handleClick("box-48")}></div>
                    </div>
                    <div className="quad quad-5">
                        <div className="box box-31" onClick={() => this.handleClick("box-31")}></div>
                        <div className="box box-32" onClick={() => this.handleClick("box-32")}></div>
                        <div className="box box-33" onClick={() => this.handleClick("box-33")}></div>
                        <div className="box box-40" onClick={() => this.handleClick("box-40")}></div>
                        <div className="box box-41" onClick={() => this.handleClick("box-41")}></div>
                        <div className="box box-42" onClick={() => this.handleClick("box-42")}></div>
                        <div className="box box-49" onClick={() => this.handleClick("box-49")}></div>
                        <div className="box box-50" onClick={() => this.handleClick("box-50")}></div>
                        <div className="box box-51" onClick={() => this.handleClick("box-51")}></div>
                    </div>
                    <div className="quad quad-6">
                        <div className="box box-34" onClick={() => this.handleClick("box-34")}></div>
                        <div className="box box-35" onClick={() => this.handleClick("box-35")}></div>
                        <div className="box box-36" onClick={() => this.handleClick("box-36")}></div>
                        <div className="box box-43" onClick={() => this.handleClick("box-43")}></div>
                        <div className="box box-44" onClick={() => this.handleClick("box-44")}></div>
                        <div className="box box-45" onClick={() => this.handleClick("box-45")}></div>
                        <div className="box box-52" onClick={() => this.handleClick("box-52")}></div>
                        <div className="box box-53" onClick={() => this.handleClick("box-53")}></div>
                        <div className="box box-54" onClick={() => this.handleClick("box-54")}></div>
                    </div>
                    <div className="quad quad-7">
                        <div className="box box-55" onClick={() => this.handleClick("box-55")}></div>
                        <div className="box box-56" onClick={() => this.handleClick("box-56")}></div>
                        <div className="box box-57" onClick={() => this.handleClick("box-57")}></div>
                        <div className="box box-64" onClick={() => this.handleClick("box-64")}></div>
                        <div className="box box-65" onClick={() => this.handleClick("box-65")}></div>
                        <div className="box box-66" onClick={() => this.handleClick("box-66")}></div>
                        <div className="box box-73" onClick={() => this.handleClick("box-73")}></div>
                        <div className="box box-74" onClick={() => this.handleClick("box-74")}></div>
                        <div className="box box-75" onClick={() => this.handleClick("box-75")}></div>
                    </div>
                    <div className="quad quad-8">
                        <div className="box box-58" onClick={() => this.handleClick("box-58")}></div>
                        <div className="box box-59" onClick={() => this.handleClick("box-59")}></div>
                        <div className="box box-60" onClick={() => this.handleClick("box-60")}></div>
                        <div className="box box-67" onClick={() => this.handleClick("box-67")}></div>
                        <div className="box box-68" onClick={() => this.handleClick("box-68")}></div>
                        <div className="box box-69" onClick={() => this.handleClick("box-69")}></div>
                        <div className="box box-76" onClick={() => this.handleClick("box-76")}></div>
                        <div className="box box-77" onClick={() => this.handleClick("box-77")}></div>
                        <div className="box box-78" onClick={() => this.handleClick("box-78")}></div>
                    </div>
                    <div className="quad quad-9">
                        <div className="box box-61" onClick={() => this.handleClick("box-61")}></div>
                        <div className="box box-62" onClick={() => this.handleClick("box-62")}></div>
                        <div className="box box-63" onClick={() => this.handleClick("box-63")}></div>
                        <div className="box box-70" onClick={() => this.handleClick("box-70")}></div>
                        <div className="box box-71" onClick={() => this.handleClick("box-71")}></div>
                        <div className="box box-72" onClick={() => this.handleClick("box-72")}></div>
                        <div className="box box-79" onClick={() => this.handleClick("box-79")}></div>
                        <div className="box box-80" onClick={() => this.handleClick("box-80")}></div>
                        <div className="box box-81" onClick={() => this.handleClick("box-81")}></div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Puzzle;