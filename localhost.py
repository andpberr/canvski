import http.server as serv
import socketserver as sock

PORT = 8000

Handler = serv.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    ".js": "application/javascript"
})

httpd = sock.TCPServer(("",PORT),Handler)

print(f"Serving at port {PORT}")
print(httpd.RequestHandlerClass.extensions_map[".js"])
httpd.serve_forever()