// controllers/pricingController.js

const { calculateTotalPrice } = require('../services/priceCalculator');

/**
 * @openapi
 * /calculatePrice:
 *   post:
 *     description: Calculate delivery price based on distance, item type, and zone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organization_id:
 *                 type: string
 *               zone:
 *                 type: string
 *               total_distance:
 *                 type: integer
 *               item_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 */
// controllers/priceController.js


function calculatePrice(req, res) {
  const { zone, organization_id, total_distance, item_type } = req.body;

  // Example pricing data (should be fetched from the database)
  const baseDistance = 5; // km
  const basePrice = 10; // euros
  const kmPricePerishable = 1.5; // euros/km
  const kmPriceNonPerishable = 1; // euros/km

  let kmPrice;
  if (item_type === 'perishable') {
    kmPrice = kmPricePerishable;
  } else {
    kmPrice = kmPriceNonPerishable;
  }

  const totalPrice = calculateTotalPrice(baseDistance, total_distance, basePrice, kmPrice);

  res.json({ total_price: totalPrice });
}

module.exports = {
  calculatePrice,
};
