import { Component } from 'react';
import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';

export class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
          allSkiDays: [
            {
              resort: "Death Valley",
              date: new Date("1/25/2010"),
              powder: true,
              backcountry: false
            },
            {
              resort: "Pheasant Mountain",
              date: new Date("8/5/2001"),
              powder: true,
              backcountry: true
            },
            {
              resort: "Hell's Gate",
              date: new Date("7/7/1998"),
              powder: false,
              backcountry: true
            }
          ]
        }
    };

  countDays(filter) {
    const { allSkiDays } = this.state;
      return allSkiDays.filter((day) => 
      (filter) ? day[filter] : day).length;
  };

  render() {
    return (
      <div className="app">
          <SkiDayList days={this.state.allSkiDays}/>
          <SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/>
      </div>
    )
  }
};