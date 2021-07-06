import React, { Component } from "react";
import SudokuField from "./SudokuField";

export default class SudokuBoard extends Component {
    render() {
        const { sudoku } = this.props;

        return (
            <div>
                {sudoku.rows.map(row => {
                    <div className="row" value={this.index}>
                        {row.cols.map(field => {
                            <SudokuField field={field} value={this.col} />;
                        })}
                    </div>;
                })}
            </div>
        );
    }
}
