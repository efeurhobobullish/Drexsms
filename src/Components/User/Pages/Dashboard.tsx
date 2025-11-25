import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Layout from "../Layout";
import Card from "../UI/Card";
import Heading from "../../Global/Heading";
import Container from "../UI/Container";

const Dashboard = () => {
  const walletBalance = 7212345;
  const purchasedNumber = 4;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Heading title="Dashboard" />
            <p className="text-gray-600 mt-2">Welcome back! Here's your account overview</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Wallet Balance Card */}
            <Card title="Wallet Balance">
              <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <div className="flex-grow">
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    <CountUp
                      end={walletBalance}
                      duration={2.5}
                      separator=","
                      prefix="₦"
                      decimals={0}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available for purchasing numbers and services
                  </p>
                </div>
                <Link 
                  to="/fund-wallet" 
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 mt-4"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  <span>Fund Wallet</span>
                </Link>
              </div>
            </Card>

            {/* Purchased Numbers Card */}
            <Card title="Purchased Numbers">
              <div className="flex flex-col h-full bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                <div className="flex-grow">
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    <CountUp
                      end={purchasedNumber}
                      duration={2}
                      separator=","
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Active phone numbers in your account
                  </p>
                </div>
                <Link 
                  to="/numbers" 
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 mt-4"
                >
                  <span className="material-symbols-outlined text-lg">visibility</span>
                  <span>View Numbers</span>
                </Link>
              </div>
            </Card>
          </div>

          {/* Quick Actions Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/purchase" 
                className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 border border-blue-200"
              >
                <span className="material-symbols-outlined text-blue-600">shopping_cart</span>
                <div>
                  <div className="font-semibold text-gray-900">Buy Numbers</div>
                  <div className="text-sm text-gray-600">Purchase new numbers</div>
                </div>
              </Link>
              
              <Link 
                to="/messages" 
                className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 border border-purple-200"
              >
                <span className="material-symbols-outlined text-purple-600">sms</span>
                <div>
                  <div className="font-semibold text-gray-900">Messages</div>
                  <div className="text-sm text-gray-600">View your messages</div>
                </div>
              </Link>
              
              <Link 
                to="/fund-wallet" 
                className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 border border-green-200"
              >
                <span className="material-symbols-outlined text-green-600">account_balance_wallet</span>
                <div>
                  <div className="font-semibold text-gray-900">Add Funds</div>
                  <div className="text-sm text-gray-600">Top up your wallet</div>
                </div>
              </Link>
              
              <Link 
                to="/numbers" 
                className="flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 border border-orange-200"
              >
                <span className="material-symbols-outlined text-orange-600">numbers</span>
                <div>
                  <div className="font-semibold text-gray-900">My Numbers</div>
                  <div className="text-sm text-gray-600">Manage numbers</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Additional Content */}
          <Container />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
