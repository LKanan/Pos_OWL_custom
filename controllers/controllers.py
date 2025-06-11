# -*- coding: utf-8 -*-
# from odoo import http


# class OdooPosOwl(http.Controller):
#     @http.route('/odoo_pos_owl/odoo_pos_owl', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/odoo_pos_owl/odoo_pos_owl/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('odoo_pos_owl.listing', {
#             'root': '/odoo_pos_owl/odoo_pos_owl',
#             'objects': http.request.env['odoo_pos_owl.odoo_pos_owl'].search([]),
#         })

#     @http.route('/odoo_pos_owl/odoo_pos_owl/objects/<model("odoo_pos_owl.odoo_pos_owl"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('odoo_pos_owl.object', {
#             'object': obj
#         })
