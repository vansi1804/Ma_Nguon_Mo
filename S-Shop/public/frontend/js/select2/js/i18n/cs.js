/*! Select2 4.0.12 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define("select2/i18n/cs", [], function () { function e(e, n) { switch (e) { case 2: return n ? "dva" : "dvě"; case 3: return "tři"; case 4: return "čtyři" }return "" } return { errorLoading: function () { return "Výsledky nemohly být načteny." }, inputTooLong: function (n) { var t = n.input.length - n.maximum; return 1 == t ? "Prosím, zadejte o jeden znak méně." : t <= 4 ? "Prosím, zadejte o " + e(t, !0) + " znaky méně." : "Prosím, zadejte o " + t + " znaků méně." }, inputTooShort: function (n) { var t = n.minimum - n.input.length; return 1 == t ? "Prosím, zadejte ještě jeden znak." : t <= 4 ? "Prosím, zadejte ještě další " + e(t, !0) + " znaky." : "Prosím, zadejte ještě dalších " + t + " znaků." }, loadingMore: function () { return "Načítají se další výsledky…" }, maximumSelected: function (n) { var t = n.maximum; return 1 == t ? "Můžete zvolit jen jednu položku." : t <= 4 ? "Můžete zvolit maximálně " + e(t, !1) + " položky." : "Můžete zvolit maximálně " + t + " položek." }, noResults: function () { return "Nenalezeny žádné položky." }, searching: function () { return "Vyhledávání…" }, removeAllItems: function () { return "Odstraňte všechny položky" } } }), e.define, e.require }();