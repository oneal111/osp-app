"use strict";$(document).ready(function(){var e=function(){return $(".table-list .js-check-all-proposal:checked").length};window.selectedProposalsCountUpdate=function(){0==e()?$("#js-recategorize-proposals-count").text(""):$("#js-recategorize-proposals-count").text(e())};var o=function(){e()>0&&$("#js-bulk-actions-button").removeClass("hide")},s=function(){var o=!(arguments.length<=0||arguments[0]===undefined)&&arguments[0];0!=e()&&1!=o||($("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown").removeClass("is-open"))};window.showOtherActionsButtons=function(){$("#js-other-actions-wrapper").removeClass("hide")};var t=function(){$("#js-other-actions-wrapper").addClass("hide")},c=function(){$("#js-recategorize-proposals-actions").removeClass("hide")};window.hideRecategorizeProposalActions=function(){return $("#js-recategorize-proposals-actions").addClass("hide")},$("#js-form-recategorize-proposals").length&&(window.hideRecategorizeProposalActions(),$("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-recategorize").click(function(e){e.preventDefault(),$("#js-form-recategorize-proposals").submit(function(){$(".layout-content > .callout-wrapper").html("")}),c(),s(!0),t()}),$(".js-check-all").change(function(){$(".js-check-all-proposal").prop("checked",$(this).prop("checked")),$(this).prop("checked")?($(".js-check-all-proposal").closest("tr").addClass("selected"),o()):($(".js-check-all-proposal").closest("tr").removeClass("selected"),s()),selectedProposalsCountUpdate()}),$(".table-list").on("change",".js-check-all-proposal",function(){var e=$(this).val(),t=$(this).prop("checked");!1===$(this).prop("checked")&&$(".js-check-all").prop("checked",!1),$(".js-check-all-proposal:checked").length===$(".js-check-all-proposal").length&&($(".js-check-all").prop("checked",!0),o()),$(this).prop("checked")?(o(),$(this).closest("tr").addClass("selected")):(s(),$(this).closest("tr").removeClass("selected")),0===$(".js-check-all-proposal:checked").length&&s(),$("#js-form-recategorize-proposals").find(".js-proposal-id-"+e).prop("checked",t),selectedProposalsCountUpdate()}),$("#js-cancel-edit-category").on("click",function(){window.hideRecategorizeProposalActions(),o(),showOtherActionsButtons()}))});