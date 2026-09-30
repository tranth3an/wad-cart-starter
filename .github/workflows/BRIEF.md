# cartTotal Brief

## Goal

Implement `cartTotal(items, options)` in `src/cart.js`.

The function calculates the final shopping cart total from the
cart items and the provided pricing options.

## Files in scope

The implementation may modify:

- `src/cart.js`

The tests may be extended in:

- `test/cart.test.js`

Do not modify unrelated project files unless required by the
project harness.

## Contract

### Input

`items` is an array of cart items.

Each item has:

- `name`: item name
- `price`: price of one item
- `qty`: quantity

`options` contains:

- `vatRate`: VAT rate
- `freeShipFrom`: subtotal at which shipping becomes free
- `shipFee`: shipping fee when the free-shipping threshold is not reached

### Calculation

First calculate the subtotal:

    subtotal = sum(price * qty)

Then calculate VAT:

    vat = subtotal * vatRate

Shipping is:

    0

when:

    subtotal >= freeShipFrom

Otherwise:

    shipFee

The final total is:

    total = subtotal + vat + shipping

The returned result must be rounded to a whole đồng and must be
a JavaScript number.

## Error cases

`cartTotal` must throw `RangeError` when:

- an item's price is negative;
- an item's quantity is not a positive integer.

An empty cart must return:

    0

## Shipping threshold

Free shipping applies when the subtotal is exactly equal to
`freeShipFrom` as well as when it is greater than the threshold.

Therefore the comparison is inclusive:

    subtotal >= freeShipFrom

## Worked example

For:

- item 1: price `180000`, quantity `2`
- item 2: price `45000`, quantity `1`
- VAT rate: `0.08`
- free-shipping threshold: `500000`
- shipping fee: `30000`

The subtotal is:

    180000 * 2 + 45000 * 1 = 405000

VAT is:

    405000 * 0.08 = 32400

Shipping is:

    30000

Therefore:

    405000 + 32400 + 30000 = 467400

The function must return:

    467400

and the result must be a number.

## Constraints

- Use plain JavaScript.
- Do not add runtime dependencies.
- Keep the implementation simple and readable.
- Follow the behaviour described in this brief and the assignment specification.
- Do not change tests simply to make the implementation pass.