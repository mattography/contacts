import React, {Component} from "react";
import ContactList from "./ContactList";
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import Input from 'muicss/lib/react/input';



class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {firstname: "Matt", lastname: "Alter", phone: "214-435-2448", key: 1525831472530},
        {firstname: "Scott", lastname: "Healy", phone: "212-272-9725", key: 1525831451835},
        {firstname: "John", lastname: "Smith", phone: "212-555-0123", key: 1525831582637}
      ],
      firstname: '',
      lastname: '',
      phone: ''
    };

    this.addContact = this.addContact.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addContact(e) {
    e.preventDefault()
      var newItem = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        key: Date.now()
      }


      let holder = this.state.items
      holder.push(newItem)
      this.setState({items: holder})
      this.setState({ firstname: '', lastname: '', phone: '' })
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }
  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
  render () {
    return (
        <Tabs onChange={this.onChange} defaultSelectedIndex={0} justified={true}>
          <Tab value="pane-1" label="Add Contact" onActive={this.onActive}>
            <Panel>
              <Form onSubmit={this.addContact}>
                      <Input
                        value={this.state.firstname}
                        name="firstname"
                        onChange={this.handleChange}
                        label="First Name"
                        required={true}
                        floatingLabel={true}
                      />
                      <Input
                        value={this.state.lastname}
                        name="lastname"
                        onChange={this.handleChange}
                        label="Last Name"
                        required={true}
                        floatingLabel={true}
                      />
                      <Input
                        value={this.state.phone}
                        name="phone"
                        onChange={this.handleChange}
                        label="Phone Number"
                        type="number"
                        required={true}
                        floatingLabel={true}
                      />
                <Button color="primary">Add</Button>
              </Form>
            </Panel>
          </Tab>
          <Tab value="pane-2" label="List Contacts">
          <Panel>
            <ContactList entries={this.state.items} delete={this.deleteItem}/>
            </Panel>
          </Tab>
        </Tabs>
    );
  }
}

export default Contacts
