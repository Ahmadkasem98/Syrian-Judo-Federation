import React from 'react'
import Footer from '../Footer/footer';
import { Drop , DropTitle , Span , Form , Input , FormInput , InputText , InputEmail , InputExp , TextArea , InputSub , } from './contactsty';
const Contact = () => {
  
  return (
    <React.Fragment>
        <Drop>
            <div className="container">
                <DropTitle><Span>Write </Span>To Us</DropTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSub type="submit" value="Send Message" />
                </Form>
            </div>
        </Drop>
        <Footer />
    </React.Fragment>
  );
}

export default Contact;
