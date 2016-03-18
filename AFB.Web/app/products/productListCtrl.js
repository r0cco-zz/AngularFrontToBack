(function() {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
        ["productResource",
            ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        vm.searchCriteria = "GDN"; //TODO implement search bar
        vm.sortProperty = "Price"; //TODO implement click property sorting
        vm.sortDirection = "desc"; //TODO implement click sort direction

        productResource.query({
            $filter: "contains(ProductCode, '" + vm.searchCriteria + "')" + " or contains(ProductName, '" + vm.searchCriteria + "')",
            $orderby: vm.sortProperty + " " + vm.sortDirection
            },
            function (data) {
            vm.products = data;
        });
    }
}());
