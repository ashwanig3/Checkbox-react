import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        data: ["itemOne", "itemTwo"],
        itemOne: false,
        itemTwo: false,
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
            </div>
        );
    }
}

export default Dashboard;