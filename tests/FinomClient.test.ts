import axios from 'axios';
import FinomClient from '../src';
import { PaymentData, CustomerData, InvoiceData } from '../src/types';

jest.mock('axios');

describe('FinomClient', () => {
    let client: FinomClient;
    let mockAxiosInstance: any;

    beforeEach(() => {
        mockAxiosInstance = {
            post: jest.fn(),
            get: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
        };

        (axios.create as jest.Mock).mockReturnValue(mockAxiosInstance);
        client = new FinomClient('test-token');
    });

    describe('Customer API', () => {
        const mockCustomer: CustomerData = {
            countryCode: 'DE',
            businessType: 'Company',
            companyName: 'Test GmbH',
            vatNumber: 'DE123456789'
        };

        test('createCustomer should create a customer', async () => {
            mockAxiosInstance.post.mockResolvedValue({ data: mockCustomer });
            const result = await client.createCustomer(mockCustomer);
            expect(mockAxiosInstance.post).toHaveBeenCalledWith('/pa/v1/customers', mockCustomer);
            expect(result).toEqual(mockCustomer);
        });
    });

    describe('Invoice API', () => {
        const mockInvoice: InvoiceData = {
            customerId: 'customer-id',
            dueDate: '2024-12-31',
            items: [{
                name: 'Test Item',
                unit: 'Piece',
                quantity: 1,
                unitPrice: 100,
                taxRate: 19
            }]
        };

        test('createInvoice should create an invoice', async () => {
            mockAxiosInstance.post.mockResolvedValue({ data: mockInvoice });
            const result = await client.createInvoice(mockInvoice);
            expect(mockAxiosInstance.post).toHaveBeenCalledWith('/pa/v1/invoices', mockInvoice);
            expect(result).toEqual(mockInvoice);
        });

        test('payInvoice should process payment', async () => {
            const paymentData: PaymentData = {
                amount: 119,
                paymentType: 'BankTransfer',
                paymentDate: '2024-10-30'
            };

            mockAxiosInstance.post.mockResolvedValue({ data: { success: true } });
            const result = await client.payInvoice('invoice-id', paymentData);
            expect(mockAxiosInstance.post).toHaveBeenCalledWith('/pa/v1/invoices/invoice-id/pay', paymentData);
            expect(result).toEqual({ success: true });
        });
    });
});