import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Layout from "../Layout";
import Card from "../UI/Card";
import Heading from "../../Global/Heading";
import Container from "../UI/Container";

const Dashboard = () => {
  const wallet = 7212345;
  const purchasedNumber = 4;

  return (
    <>
      <Layout>
        <div>
          <Heading title="Dashboard" />

          {/* Added gap-6 for better spacing between cards in your grid */}
          <div className="grid-card mt-6 gap-6">
            
            {/* Wallet Card */}
            <Card 
              title="Wallet Balance" 
              data={
                <CountUp 
                  start={0} 
                  end={wallet} 
                  duration={2.5} 
                  separator="," 
                  decimals={2} 
                  prefix="₦" 
                  className="font-bold" // Optional: ensures the number is bold
                />
              }
            >
              <Link 
                to="/fund-wallet" 
                className="flex-center-center text-sm font-bold gap-2 w-full md:w-[80%] h-[45px] rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">add</span>
                <span>Fund Wallet</span>
              </Link>
            </Card>

            {/* Purchased Numbers Card */}
            <Card 
              title="Purchased Numbers" 
              data={
                <CountUp 
                  start={0} 
                  end={purchasedNumber} 
                  duration={3} 
                  className="font-bold"
                />
              }
            >
              <Link 
                to="/numbers" 
                className="flex-center-center text-sm font-bold gap-2 w-full md:w-[80%] h-[45px] rounded-lg bg-secondary text-white hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">visibility</span>
                <span>See Numbers</span>
              </Link>
            </Card>
          </div>

          {/* Added margin top to separate container from cards */}
          <div className="mt-8">
            <Container/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
