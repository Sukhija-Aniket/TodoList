FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the appropriate location in the container
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY index.js /usr/share/nginx/html
COPY assets /usr/share/nginx/html


# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
