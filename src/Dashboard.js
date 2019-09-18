import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        data: ["itemOne", "itemTwo"],
        arr: [
            {name: 'ashwani goswami', option: 'option1'},
            {name: 'ruchi', option: 'option2'},
            {name: 'abhishek', option: 'option3'}
        ],
        itemOne: false,
        itemTwo: false,
        dropdownVal: '',
        searchByNameVal: ''
    }
handleChange = (value) => {
    var check1 = document.querySelector('.itemOne');
    var check2 = document.querySelector('.itemTwo');
    if(value === "itemOne") {
        check2.checked = false;
        this.setState({
            itemOne : !this.state.itemOne,
            itemTwo: false
        })
    } else if(value === 'itemTwo') {
        check1.checked = false;
        this.setState({
            itemTwo : !this.state.itemTwo,
            itemOne: false
        })
    }
}
handleSearchByName = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = this.state.searchByNameVal;
    const filteredArr = this.state.arr.filter(item => item.name.includes(inputVal) && item.option === this.state.dropdownVal);
    console.log(filteredArr)
} 
    render() {
        const { itemOne, itemTwo } = this.state;
        return (
            <div>
                {
                    this.state.data.map(item => <input type="checkbox" className={item} name={item} onChange={ () =>this.handleChange(item) }/>)
                }
                {
                    itemOne ? <div>itemone</div> : null
                }
                {
                    itemTwo ? <div>itemtwo</div> : null
                }
                <select name="dropdownVal" onChange={this.handleSearchByName}>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                </select>
                <input type="text" placeholder="search by name" name="searchByNameVal" onChange={this.handleSearchByName} />
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        );
    }
}

export default Dashboard;