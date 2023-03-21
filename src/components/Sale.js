import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function CreateTransaction ({
  createTransaction,
  transaction,
  handleChange
}
) {
  return (
    <div className={styles.CreateTransaction}>
      <h2 className={styles.NewTransaction}>Create A Transaction</h2>
      <div className={styles.container}>
        <Form 
          className={styles.Form}
          onSubmit={(e) => {
            e.preventDefault()
            createTransaction()
          }}
        >
          
          <Form.Label>First Name
            <input 
            className={styles.firstName}
            type='text' 
            value={transaction.firstName} 
            name='firstName' 
            onChange={handleChange} 
            placeholder='First Name' 
            />
          </Form.Label>

          <Form.Label>Last Name
            <input className={styles.lastName}
            type='text' 
            value={transaction.lastName} 
            name='lastName' 
            onChange={handleChange} 
            placeholder='Last Name' />
          </Form.Label>

          <Form.Label>Purchase or Sale:
            <Form.Select 
            options={transaction.transactionType} 
            value={transaction.transactionType} 
            onChange={handleChange} 
            placeholder='transactionType'
            name="transactionType">
              <option value="Sale">Sale</option>
              <option  value="Purchase">Purchase</option>
            </Form.Select>
            </Form.Label>

            <Form.Label>Cash/Barter/Credit
            <input className={styles.cash}
            type='boolean' 
            value={transaction.cash} 
            name='cash' 
            onChange={handleChange} 
            placeholder='Check if Barter' />
          </Form.Label>

          <Form.Label>Item Purchased:
            <Form.Select 
            options={transaction.item} 
            value={transaction.item} 
            onChange={handleChange} 
            placeholder='Category'
            name="item">
              <option value="Item 1">Item 1</option>
              <option  value="Item 2">Item 2</option>
            </Form.Select>
            </Form.Label>

            <Form.Label>Item Purchased:
            <Form.Select 
            options={transaction.item} 
            value={transaction.item} 
            onChange={handleChange} 
            placeholder='Category'
            name="item">
              <option value="Item 1">Item 1</option>
              <option  value="Item 2">Item 2</option>
            </Form.Select>
            </Form.Label>

          <Button className={styles.button} 
          type='submit' 
          value='Create Transaction' />

        </Form>
      </div>
     
    </div>
  )
}
