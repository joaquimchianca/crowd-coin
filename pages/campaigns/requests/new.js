import React, { Component } from "react"
import { Form, Button, Message, Input } from 'semantic-ui-react'
import web3 from '../../../ethereum/web3'
import Campaign from '../../../ethereum/campaign'
import { Link, Router } from '../../../routes'
import Layout from "../../../components/Layout"

class RequestNew extends Component {
    state = {
        description: '',
        value: '',
        recipient: '',
        errorMsg: '',
        loading: false
    }

    static async getInitialProps(props) {
        const { address } = props.query

        return { address }
    }

    onSubmit = async event => {
        event.preventDefault()

        const campaign = Campaign(this.props.address)
        const { description, value, recipient } = this.state

        this.setState({ loading: true, errorMsg: '' })

        try {
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(
                description, web3.utils.toWei(value, 'ether'), recipient
            ).send({ from: accounts[0] })

            Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        } catch (err) {
            this.setState({ errorMsg: err.message })
        }

        this.setState({ loading:false })
    }


    render() {
        return (
            <Layout>
                <Link legacyBehavior route={`campaigns/${this.props.address}/requests`}>
                    <a>
                        <Button icon="arrow left"></Button>
                    </a>
                </Link>
                <h3>Create a request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={event => this.setState({
                                description: event.target.value
                            })}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input 
                            value={this.state.value}
                            onChange={e => this.setState({
                                value: e.target.value
                            })}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={e => this.setState({
                                recipient: e.target.value
                            })}/>
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMsg}/>
                    <Button primary loading={this.state.loading}>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default RequestNew