import axios, { AxiosInstance } from 'axios';
import {
    CustomerData,
    InvoiceData,
    PaymentData,
    WebhookData,
    ListInvoiceParams,
    ListCustomerParams
} from './types';

export class FinomClient {
    private client: AxiosInstance;

    constructor(token: string, sandbox: boolean = false) {
        this.client = axios.create({
            baseURL: 'https://app.finom.co',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    // Customer Methods
    async createCustomer(customerData: CustomerData) {
        const response = await this.client.post('/pa/v1/customers', customerData);
        return response.data;
    }

    async listCustomers(params?: ListCustomerParams) {
        const response = await this.client.get('/pa/v1/customers', { params });
        return response.data;
    }

    async getCustomer(id: string) {
        const response = await this.client.get(`/pa/v1/customers/${id}`);
        return response.data;
    }

    async updateCustomer(id: string, customerData: CustomerData) {
        const response = await this.client.put(`/pa/v1/customers/${id}`, customerData);
        return response.data;
    }

    async deleteCustomer(id: string) {
        const response = await this.client.delete(`/pa/v1/customers/${id}`);
        return response.data;
    }

    // Invoice Methods
    async createInvoice(invoiceData: InvoiceData) {
        const response = await this.client.post('/pa/v1/invoices', invoiceData);
        return response.data;
    }

    async listInvoices(params?: ListInvoiceParams) {
        const response = await this.client.get('/pa/v1/invoices', { params });
        return response.data;
    }

    async getInvoice(id: string) {
        const response = await this.client.get(`/pa/v1/invoices/${id}`);
        return response.data;
    }

    async updateInvoice(id: string, invoiceData: InvoiceData) {
        const response = await this.client.put(`/pa/v1/invoices/${id}`, invoiceData);
        return response.data;
    }

    async deleteInvoice(id: string) {
        const response = await this.client.delete(`/pa/v1/invoices/${id}`);
        return response.data;
    }

    async payInvoice(id: string, paymentData: PaymentData) {
        const response = await this.client.post(`/pa/v1/invoices/${id}/pay`, paymentData);
        return response.data;
    }

    // Webhook Methods
    async createWebhook(webhookData: WebhookData) {
        const response = await this.client.post('/pa/v1/webhooks', webhookData);
        return response.data;
    }

    async listWebhooks() {
        const response = await this.client.get('/pa/v1/webhooks');
        return response.data;
    }

    async getWebhook(id: string) {
        const response = await this.client.get(`/pa/v1/webhooks/${id}`);
        return response.data;
    }

    async deleteWebhook(id: string) {
        const response = await this.client.delete(`/pa/v1/webhooks/${id}`);
        return response.data;
    }
}

export default FinomClient;