export interface CustomerRepository {
  getCustomer(customerId: number): object
}

export class LocalCustomerRepository implements CustomerRepository {
  public getCustomer(customerId: number) {
    return {
      id: customerId,
      fields: [
        {
          label: "Nama",
          type: "string",
          value: "Volia"
        },
        {
          label: "Tanggal Lahir",
          type: "string",
          value: "8 November 1975"
        }
      ]
    }
  }
}
