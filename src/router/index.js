import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import DetailPage from "../views/DetailPage.vue";
import AuctionList from "../views/AuctionList.vue";
import AuctionGuide from "../views/AuctionGuide.vue";
import BidHistory from "../views/BidHistory.vue";
import RefundInfo from "../views/RefundInfo.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/detail/:id", name: "DetailPage", component: DetailPage },
  { path: "/auction-list/:id?", name: "AuctionList", component: AuctionList },
  { path: "/auction-guide/:id?", name: "AuctionGuide", component: AuctionGuide },
  { path: "/bid-history/:id?", name: "BidHistory", component: BidHistory },
  { path: "/refund-info/:id?", name: "RefundInfo", component: RefundInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;