import React, {Component} from 'react';
import { Segment, Grid, Image, Form, Button } from 'semantic-ui-react';

class BookForm extends Component {
  state = {
    data: {
      goodreadIs: this.props.book.goodreadIs,
      title: this.props.book.title,
      authors: this.props.book.authors,
      pages: this.props.book.pages,
      cover: this.props.book.covers[0]
    },
    covers: this.props.book.covers,
    index: 0,
    loading: false,
    loadingCover: false,
    errors: {} 
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        goodreadIs: props.book.goodreadIs,
        title: props.book.title,
        authors: props.book.authors,
        pages: props.book.pages,
        cover: props.book.covers[0]
      },
      covers: props.book.covers
    })
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  })

  onChangeNumber = e => this.setState({
    data: { ...this.state.data, [e.target.name]: parseInt(e.target.value, 10)}
  })

  onSubmit = () => {
    const errors = this.Validator(this.state.data)
    this.setState({errors})
    if(Object.keys(errors).length === 0) {
      this.setState({loading: true})
      this.props.submit(this.state.data).catch(err => this.setState({
        errors: err.response.data.errors,
        loading: false
      }))
    }
  }

  Validator = data => {
    const errors = {}
    if(!data.title) errors.title = "Title Can't be blank";
    if(!data.authors) errors.authors = "Authors Can't be blank";
    if(!data.pages) errors.pages = "Pages Can't be blank";
    return errors;
  }

  changeCover = (e) => {
    e.preventDefault()
    const {index, covers} = this.state
    this.setState({loadingCover: true})
    const newIndex = index + 1 >= covers.length ? 0 : index + 1
    this.setState({
      index: newIndex,
      data: {...this.state.data, cover: covers[index]},
      loadingCover: false
    })
  }

  render() {
    const {errors, covers, data, loading} = this.state
    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor='title'>Title</label>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Title'
                    value={data.title}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <Form.Field error={!!errors.authors}>
                  <label htmlFor='authors'>Authors</label>
                  <input
                    type='text'
                    id='authors'
                    name='authors'
                    placeholder='Authors'
                    value={data.authors}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <Form.Field error={!!errors.pages}>
                  <label htmlFor='pages'>Pages</label>
                  <input
                    type='number'
                    id='pages'
                    name='pages'
                    value={data.pages}
                    onChange={this.onChangeNumber}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <div style={{textAlign: 'center'}}>
                  <Image size='medium' src={data.cover} centered/>
                  <br/>
                  {covers.length > 1 && (
                    <Button loading={this.state.loadingCover} basic onClick={this.changeCover}>Change Cover</Button>
                  )}
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button primary floated='right'>Add Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}
 
export default BookForm;