export type PaymentType = 'BankTransfer' | 'Cash' | 'Cheque' | 'PaymentCard' | 'DirectDebit' | 'Other';
export type BusinessType = 'Company' | 'NaturalPerson' | 'PublicAdministration';
export type WebhookEvent = 'CreditNoteRejected' | 'InvoiceStatusChanged' | 'ElectronicInvoiceStatusChanged'
    | 'InvoiceOverdue' | 'IncomingInvoiceReceived' | 'IncomingInvoiceStatusChanged'
    | 'IncomingInvoiceOverdue' | 'All';
export type InvoiceStatus = 'New' | 'Sent' | 'Viewed' | 'EmailOpened' | 'PartiallyPaid' | 'Paid' | 'Canceled';

export interface PaymentData {
    amount: number;
    paymentType: PaymentType;
    paymentDate: string;
}

export interface CustomerData {
    countryCode: string;
    businessType: BusinessType;
    companyName?: string;
    firstName?: string;
    lastName?: string;
    vatNumber?: string;
    email?: string;
    phoneCode?: string;
    phoneNumber?: string;
    fiscalCode?: string;
    city?: string;
    zipCode?: string;
    streetName?: string;
    houseNumber?: string;
}

export interface InvoiceItem {
    name: string;
    unit: string;
    quantity: number;
    unitPrice: number;
    taxRate: number;
}

export interface InvoiceData {
    customerId: string;
    dueDate: string;
    items: InvoiceItem[];
    isElectronic?: boolean;
    type?: 'Invoice' | 'Parcella';
    number?: string;
    issueDate?: string;
    paymentMethod?: PaymentType;
    notes?: string;
}

export interface WebhookData {
    events: WebhookEvent[];
    url: string;
    secret?: string;
}

export interface ListParams {
    nextPageToken?: string;
    pageSize?: number;
}

export interface ListInvoiceParams extends ListParams {
    status?: 'Paid' | 'AwaitingPayment';
    createdFrom?: string;
    createdTo?: string;
    issueDateFrom?: string;
    issueDateTo?: string;
    dueDateFrom?: string;
    dueDateTo?: string;
    orderBy?: 'CreatedAt' | 'IssueDate' | 'DueDate';
}

export interface ListCustomerParams extends ListParams {
    text?: string;
}