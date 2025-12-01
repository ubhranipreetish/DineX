import { OrderProvider } from './context/OrderContext';

export default function StaffLayout({ children }) {
    return <OrderProvider>{children}</OrderProvider>;
}
