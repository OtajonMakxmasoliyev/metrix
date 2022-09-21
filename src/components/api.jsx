import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: "c1e07b63-30db-41c6-aaa2-9da0dda36f77",
            name: "vdfvvfvf",
            description: "dsdxsd",
            price: "99.6",
            image: "",
            category: {
                id: "728fc685-9b78-402c-9ea9-65862f0c9d89",
                name: "tshirt",
                amountOfProduct: 1
            },
            size: [
                {
                    id: "229f8686-e10c-4bac-aa1a-bc8c1b89d350",
                    name: "xl"
                }
            ],
            color: [
                {
                    id: "77073b63-8130-41cb-8b97-a40240250daa",
                    name: "black"
                }
            ]
        };
    }
    submit = () => {
        fetch('https://safe-sands-85755.herokuapp.com/api/products/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    onChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })

        console.log(event.target);
        console.log(this.state);
    }
    Image = (e) => {
        const img = e.target.files[0]
        this.state.image = img
        console.log(this.state);
    }
    render() {
        return (
            <div>
                id
                <input type="text" name="price" id="" onChange={this.onChangeHandler} />
                name
                <input type="text" name="name" id="" onChange={this.onChangeHandler} />
                description
                <input type="text" name="price" id="" onChange={this.onChangeHandler} />
                file
                <input type="file" name="image" id="" onChange={this.Image} />
                <button onClick={this.submit}>submit</button>
            </div>


        )
    }
}



