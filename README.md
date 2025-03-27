# @danielgtmn/finom-api-client

[![npm version](https://badge.fury.io/js/@danielgtmn%2Ffinom-api-client.svg)](https://www.npmjs.com/package/@danielgtmn/finom-api-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> A Node.js client for the Finom Public API

## 📦 Installation

```bash
npm install @danielgtmn/finom-api-client
```

## 🚀 Quick Start

```typescript
import FinomClient from '@danielgtmn/finom-api-client';

// Initialize the client
const client = new FinomClient('YOUR_API_TOKEN');

// For sandbox mode
const sandboxClient = new FinomClient('sandbox', true);
```

## ✨ Features

- 🔑 Simple authentication
- 📋 Customer management
- 📄 Invoice handling
- 🔔 Webhook support
- 📦 TypeScript support
- 🚀 Promise-based API

## 📋 Usage Examples

### Customer Management

```typescript
// Create a customer
const customer = await client.createCustomer({
  countryCode: "DE",
  businessType: "Company",
  companyName: "Example GmbH",
  vatNumber: "DE123456789",
  email: "contact@example.com"
});

// List customers
const customers = await client.listCustomers({
  pageSize: 10
});

// Get a single customer
const customer = await client.getCustomer('customer-id');
```

### Invoice Management

```typescript
// Create an invoice
const invoice = await client.createInvoice({
  customerId: "customer-id",
  dueDate: "2024-11-30",
  items: [
    {
      name: "Service",
      unit: "Hours",
      quantity: 10,
      unitPrice: 100,
      taxRate: 19
    }
  ]
});

// Mark invoice as paid
await client.payInvoice('invoice-id', {
  amount: 1190,
  paymentType: 'BankTransfer',
  paymentDate: '2024-10-30'
});
```

### Webhook Management

```typescript
// Create a webhook
const webhook = await client.createWebhook({
  events: ['InvoiceStatusChanged', 'InvoiceOverdue'],
  url: 'https://your-domain.com/webhook',
  secret: 'your-secret-key'
});
```

## 🔧 Error Handling

```typescript
try {
  const invoice = await client.createInvoice({
    // invoice data
  });
} catch (error) {
  if (error.response) {
    console.error('Error:', error.response.data);
  } else if (error.request) {
    console.error('No response:', error.request);
  } else {
    console.error('Error:', error.message);
  }
}
```

## 📘 API Methods

### Customers
- `createCustomer(data)`
- `listCustomers(params?)`
- `getCustomer(id)`
- `updateCustomer(id, data)`
- `deleteCustomer(id)`

### Invoices
- `createInvoice(data)`
- `listInvoices(params?)`
- `getInvoice(id)`
- `updateInvoice(id, data)`
- `deleteInvoice(id)`
- `payInvoice(id, paymentData)`

### Webhooks
- `createWebhook(data)`
- `listWebhooks()`
- `getWebhook(id)`
- `deleteWebhook(id)`

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📫 Support

- Create a [GitHub issue](https://github.com/danielgtmn/finom-api-client/issues) for bug reports and feature requests
- Follow [@danielgtmn](https://github.com/danielgtmn) for announcements