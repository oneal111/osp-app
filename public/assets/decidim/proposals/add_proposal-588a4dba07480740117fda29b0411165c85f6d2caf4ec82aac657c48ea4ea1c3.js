"use strict";$(function(){window.DecidimProposals=window.DecidimProposals||{},window.DecidimProposals.bindProposalAddress=function(){var o=$("#proposal_has_address"),s=$("#address_input");if(o.length>0){var i=function(){o[0].checked?s.show():s.hide()};i(),o.on("change",i)}},window.DecidimProposals.bindProposalAddress()});