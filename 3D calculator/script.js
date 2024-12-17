// Cube
function calculateCube() {
    const side = parseFloat(document.getElementById('cube-side').value);
    const area = 6 * side ** 2;
    const volume = side ** 3;
    document.getElementById('cube-result').innerText = `Area: ${area}
    Volume: ${volume}`;
  }
  
  // Sphere
  function calculateSphere() {
    const r = parseFloat(document.getElementById('sphere-radius').value);
    const area = 4 * Math.PI * r ** 2;
    const volume = (4 / 3) * Math.PI * r ** 3;
    document.getElementById('sphere-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Prism
  function calculatePrism() {
    const l = parseFloat(document.getElementById('prism-length').value);
    const w = parseFloat(document.getElementById('prism-width').value);
    const h = parseFloat(document.getElementById('prism-height').value);
    const area = 2 * (l * w + l * h + w * h);
    const volume = l * w * h;
    document.getElementById('prism-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Pyramid
  function calculatePyramid() {
    const b = parseFloat(document.getElementById('pyramid-base').value);
    const h = parseFloat(document.getElementById('pyramid-height').value);
    const area = b ** 2 + 2 * b * Math.sqrt((b / 2) ** 2 + h ** 2);
    const volume = (1 / 3) * b ** 2 * h;
    document.getElementById('pyramid-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Tetrahedron
  function calculateTetrahedron() {
    const a = parseFloat(document.getElementById('tetra-edge').value);
    const area = Math.sqrt(3) * a ** 2;
    const volume = (a ** 3) / (6 * Math.sqrt(2));
    document.getElementById('tetra-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Torus
  function calculateTorus() {
    const R = parseFloat(document.getElementById('torus-major').value);
    const r = parseFloat(document.getElementById('torus-minor').value);
    const area = 4 * Math.PI ** 2 * R * r;
    const volume = 2 * Math.PI ** 2 * R * r ** 2;
    document.getElementById('torus-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Cylinder
  function calculateCylinder() {
    const r = parseFloat(document.getElementById('cylinder-radius').value);
    const h = parseFloat(document.getElementById('cylinder-height').value);
    const area = 2 * Math.PI * r * (r + h);
    const volume = Math.PI * r ** 2 * h;
    document.getElementById('cylinder-result').innerText = `Area: ${area}
     Volume: ${volume}`;
  }
  
  // Cone
  function calculateCone() {
    const r = parseFloat(document.getElementById('cone-radius').value);
    const h = parseFloat(document.getElementById('cone-height').value);
    const area = Math.PI * r * (r + Math.sqrt(h ** 2 + r ** 2));
    const volume = (1 / 3) * Math.PI * r ** 2 * h;
    document.getElementById('cone-result').innerText = `Area: ${area} 
     Volume: ${volume}`;
  }
  
  // Hemisphere
  function calculateHemisphere() {
    const r = parseFloat(document.getElementById('hemisphere-radius').value);
    const area = 3 * Math.PI * r ** 2;
    const volume = (2 / 3) * Math.PI * r ** 3;
    document.getElementById('hemisphere-result').innerText = `Area: ${area} 
     Volume: ${volume}`;
  }
  