function calculateTotalPrice(baseDistance, totalDistance, basePrice, kmPrice) {
  const excessDistance = Math.max(0, totalDistance - baseDistance);
  const totalPrice = basePrice + excessDistance * kmPrice;
  return totalPrice.toFixed(2);
}

module.exports = {
  calculateTotalPrice,
};
