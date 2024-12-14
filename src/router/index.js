import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import DetailPage from "../views/DetailPage.vue";
import AuctionList from "../views/AuctionList.vue";
import AuctionGuide from "../views/AuctionGuide.vue";
import BidHistory from "../views/BidHistory.vue";
import RefundInfo from "../views/RefundInfo.vue";

const routes = [
  { path: "/CustomsWebRefresh/", name: "MainPage", component: MainPage },
  { path: "/CustomsWebRefresh/detail/:id", name: "DetailPage", component: DetailPage },
  { path: "/CustomsWebRefresh/auction-list/:id?", name: "AuctionList", component: AuctionList },
  { path: "/CustomsWebRefresh/auction-guide/:id?", name: "AuctionGuide", component: AuctionGuide },
  { path: "/CustomsWebRefresh/bid-history/:id?", name: "BidHistory", component: BidHistory },
  { path: "/CustomsWebRefresh/refund-info/:id?", name: "RefundInfo", component: RefundInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;