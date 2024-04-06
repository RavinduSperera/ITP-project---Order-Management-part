import React from "react";

class CreateOrder extends React.Component {

    // define the constructor
    constructor() {
        super();
        this.increment = this.increment.bind(this); // bind the function to the class
        this.state = {
            // set attributes here
            number: 0
        }
    }

    // crating the function for the button
    increment() {
        this.setState({
            number: this.state.number + 1 // incrementing the number
        })
    }

    // render function
    render() {
        return (
            <div>
                <form>
                    <button onClick={this.increment} class="backBTN">Back</button><h1>Place Order</h1>
                    <div class="form-group">
                        <label for="customer_ID">Customer ID </label>
                        <input type="string" placeholder="xxxxxxxxxx"></input>
                    </div><br></br>

                    <div class="form-group">
                        <label for="purchase_amount">Purchase Amount </label>
                        <input type="number" placeholder="0"></input>
                    </div><br></br>

                    <div class="form-group">
                        <label for="order_status">Order Status </label>
                        <input type="string" placeholder="Status"></input>
                    </div><br></br>

                    <div class="form-group">
                        <label for="additional_notes">Additional Notes </label>
                        <textarea rows={"1"} cols={"20"} placeholder="More Instructions"></textarea>
                    </div><br></br>

                    <div class="form-group">
                        <label for="delivery_distance">Delivery Distance </label>
                        <input type="number" placeholder="km"></input>
                    </div><br></br>

                    <div class="form-group">
                        <label for="delivery_charges">Delivery Charges </label>
                        <input type="number" placeholder="Rs."></input>
                    </div><br></br>

                    <div class="form-group">
                        <label for="total_amount">Total </label>
                        <input type="number" placeholder="Rs."></input>
                    </div><br></br>

                <button onClick={this.increment} class="paymentBTN">Place Order</button> {/* re-directing to the payment page */}
                <button onClick={this.increment} class="cancelBTN">Cancel</button> {/* redirecting to the item page */}
                </form><br></br>
                <hr></hr>
            </div>
        )
    }
}

export default CreateOrder;

// make sure to link the buttons with the compornents