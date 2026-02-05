type OrderRepository = {
  id: number;
  table_session_id: number;
  product_id: number;
  quantity: number;
  price: decimal;
  created_at: Date;
  updated_at: Date;
};
