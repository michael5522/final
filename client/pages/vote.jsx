// import React from 'react';
// import ViewResult from './viewresult';

// class Vote extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       amountOfPeople: 0,
//       selectedOption: null,
//       totalCount: [],
//       winner: null
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleOptionChange = this.handleOptionChange.bind(this);

//   }

//   handleSubmit(event) {

//     // this.mostFrequent(this.state.totalCount);
//     const oldData = [...this.state.totalCount];
//     // console.log(oldData);
//     console.log('selectedOption', this.state.selectedOption);
//     oldData.push(this.state.selectedOption);
//     const peopleVoted = this.state.amountOfPeople + 1;
//     this.setState({
//       amountOfPeople: peopleVoted,
//       totalCount: oldData,
//       selectedOption: null
//     });

//     const numberOfPeoplePassedDown = this.props.numberOfPeople;
//     console.log('# of people who will vote', numberOfPeoplePassedDown);
//     const currentNumberOfPeopleVoted = peopleVoted;

//     console.log('people who have voted', peopleVoted);
//     if (numberOfPeoplePassedDown == peopleVoted) {
//       console.log('current stuff inside voted', oldData);
//       this.mostFrequent(oldData);

//     }

//     event.preventDefault();
//   }

//   handleOptionChange(changeEvent) {
//     // console.log('to be addedddddd', changeEvent.target.value);
//     this.setState({
//       selectedOption: changeEvent.target.value
//     });
//   }

//   mostFrequent(arr) {
//     console.log('MF ARR', arr);
//     let mf = arr[0];
//     let maxCount = 0;
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       let count = 0;
//       for (let j = i + 1; j < len; j++) {
//         if (arr[i] == arr[j]) {
//           count++;
//         }
//       }
//       if (maxCount < count) {
//         maxCount = count;
//         mf = arr[i];
//       }
//       if (maxCount === 0) {
//         mf = 'nobody, vote again';
//       }
//     }

//     console.log('THE WINNER', mf);
//     this.setState({
//       winner: mf
//     });
//   }

//   render() {

//     const numberOfPeoplePassedDown = this.props.numberOfPeople;
//     // console.log("number of people",numberOfPeoplePassedDown);
//     const currentNumberOfPeopleVoted = this.state.amountOfPeople;
//     // console.log("amount of people who voted", currentNumberOfPeopleVoted)
//     const foodToBeRendered = this.props.foodSug;
//     // console.log("food to be rendered",foodToBeRendered);

//     if (numberOfPeoplePassedDown === currentNumberOfPeopleVoted) {
//       return (

//         <ViewResult view={this.props.view} winner={this.state.winner} />
//       );
//     }

//     return (

//       <div>
//         <h3>You are now ready Vote</h3>
//         <h4>You are currently Person {this.state.amountOfPeople + 1}</h4>
//         <div className="container">
//           <div className="row mt-5">
//             <div className="col-sm-12">

//               <form>
//                 {
//                   foodToBeRendered.map((x, index) => {
//                     return (
//                       <div key={index} className="form-check">
//                         <label>
//                           <input
//                             type="radio"
//                             name="react-tips"
//                             value={x}
//                             checked={this.state.selectedOption === x}
//                             onChange={this.handleOptionChange}
//                             className="form-check-input"
//                           />
//                           {x}
//                         </label>
//                       </div>
//                     );
//                   }

//                   )
//                 }
//                 <button onClick={this.handleSubmit}>Click to Submit</button>
//               </form>

//             </div>
//           </div>
//         </div>

//         <h6> Pass your phone to Person {this.state.amountOfPeople + 2} After Selecting</h6>
//       </div>
//     );
//   }
//   // }
// }
// export default Vote;
