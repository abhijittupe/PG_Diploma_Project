import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <Card className='bg-light mt-4 mb-5 ml-5 mr-5'>
            <h1 className='text-center'>Flight Booking FAQs</h1>
      <Card.Body>
        <div className="col-md-12 justify-content" >
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>Why is flight ticket booking the cheapest Here?</b> </Accordion.Header>
        <Accordion.Body>
        We directly searches multiple airline websites for the cheapest fares. Many airlines prefer to sell their cheapest flight tickets on ixigo. ixigo also searches through millions of routes to find the cheapest possible route for your flight journey.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <b>How to book cheap flight tickets ?</b> </Accordion.Header>
        <Accordion.Body>
        Here's how you can book cheap flight tickets <br />
               1. Book your flight tickets in advance to get the cheapest deals. <br />
               2. Be flexible and consider flying during off-peak hours to get cheaper flight tickets. <br />
               3. Sign up for ixigo fare alerts feature to get notified when tickets go cheaper. <br />
               4. If you got time, try stopover flights as flights with multiple stops are often cheaper. <br />
               5. Avoid traveling on weekends, as air tickets are usually higher during this time.
                Try budget airlines to book cheap flight tickets. <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <b>How can I avail domestic flight offers Here?</b> </Accordion.Header>
        <Accordion.Body>
        To avail domestic flight offers on here: <br />

    1. Visit the ixigo website and enter your travel dates and destination. <br />
2. Click on the "offers" tab to view available discounts and promotions on domestic flights. <br />
3. Choose your preferred offer and make the payment using various options including credit and debit cards, net banking, and wallets. <br />
4. ixigo offers various cashback offers on domestic flight bookings from time to time. When it comes to payment options at the time of booking, ixigo offers a range of options to choose from, including credit and debit cards, net banking, and wallets.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <b>Why should you consider low-cost carriers for your flight tickets?</b> </Accordion.Header>
        <Accordion.Body>
        Low-cost carriers, also known as budget airlines, offer flight tickets at significantly lower airfare than full-service airlines.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> <b>How can I cancel flight ticket booking?</b> </Accordion.Header>
        <Accordion.Body>
        To cancel your air ticket booking, follow the given steps; <br />
1. Visit ixigo flights homepage or open the ixigo app.  <br />
2. Login using the registered mobile no. or email address. <br />
3. Click on your name icon on the top right corner of the screen, a drop-down menu will open. <br />
4. Select ‘My Trips’ and your booked ticket history will appear. <br />
5. Click on the flight ticket you wish to cancel. <br />
6. Select “Proceed to cancellation” and cancel your ticket. <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      
      </Card.Body>
    </Card>
  );
}

export default Faq;