From nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the appropriate location in the container
COPY . /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
