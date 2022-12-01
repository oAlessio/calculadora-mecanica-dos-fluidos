function calcular1(){
    var na1 = document.getElementById('massa-fluido')
    var na2 = document.getElementById('velocidade-fluido') 
    var na3 = document.getElementById('diametro-interno')
    var na4 = document.getElementById('viscosidade-fluido')
    var a1 = Number(na1.value)
    var a2 = Number(na2.value)
    var a3 = Number(na3.value)
    var a4 = Number(na4.value)

    if (!a1 || !a2 || !a3 || !a4) return

    var r1 = a1 * a2 * a3 / a4 * (10**3)
    res1.innerHTML = `Seu número de Reynolds é <strong>${r1}</strong>`
}

function calcular2(){
    var nb1 = document.getElementById('velocidade-flu')
    var nb2 = document.getElementById('diametro-inter')
    var nb3 = document.getElementById('cinematica-fluido')
    var b1 = Number(nb1.value)
    var b2 = Number(nb2.value)
    var b3 = Number(nb3.value)
    var r2 = b1 * b2 / b3 * (10**6)

    if (!b1 || !b2 || !b3) return

    res2.innerHTML = `Seu número de Reynolds é <strong>${r2}</strong>`
}

function calcular3(){
    var nc1 = document.getElementById('vazao')
    var nc2 = document.getElementById('area-interna')
    var c1 = Number(nc1.value)
    var c2 = Number(nc2.value)
    var r3 = c1 / c2

    if (!c1 || !c2) return
    res3.innerHTML = `A velocidade do fluído é <strong>${r3.toFixed(3)}</strong>`
}

function calcular4(){
    var nd1 = document.getElementById('rugosidade-eq')
    var nd2 = document.getElementById('diametro-int')
    var d1 = Number(nd1.value)
    var d2 = Number(nd2.value)
    var r4 = d1 / d2

    if (!d1 || !d2) return

    res4.innerHTML = `A rugosidade relativa é <strong>${r4.toFixed(5)}</strong>`
}

function calcular5(){
    var ne1 = document.getElementById('comprimento')
    var ne2 = document.getElementById('diametro-i')
    var ne3 = document.getElementById('velocidade-f')
    var ne4 = document.getElementById('gravidade')
    var ne5 = document.getElementById('f')
    var e1 = Number(ne1.value)
    var e2 = Number(ne2.value)
    var e3 = Number(ne3.value)
    var e4 = Number(ne4.value)
    var e5 = Number(ne5.value)
    var r5 = e1 / e2 * ((e3**2) / (2*e4)) * e5

    if (!e1 || !e2 || !e3 || !e4 || !e5) return

    res5.innerHTML = `A perda de carga é <strong>${r5.toFixed(5)}</strong>`
}

function calcular6(){
    var nf1 = document.getElementById('psi')
    var f1 = Number(nf1.value)
    var r6 = f1 * 6894.76

    if (!f1) return

    res6.innerHTML = `A sua transformação é de  <strong>${r6.toFixed(2)} pascal.</strong>`
}

function calcular7(){
    var ng1 = document.getElementById('milimetro')
    var g1 = Number(ng1.value)
    var r7 = g1 / 1000

    if (!g1) return

    res7.innerHTML = `A sua transformação é de <strong>${r7.toFixed(5)}</strong> metros.`
}

function calcular8(){
    var nh1 = document.getElementById('hp-expe')
    var nh2 = document.getElementById('hp-teo1')
    var nh3 = document.getElementById('hp-teo2')
    var h1 = Number(nh1.value)
    var h2 = Number(nh2.value)
    var h3 = Number(nh3.value)
    var r8 = (h1 - h2) / h3 *100

    if (!h1 || !h2 || !h3) return

    res8.innerHTML = `O seu Δ% é ${r8.toFixed(5)}`
}

function calcular9(){
    var ni1 = document.getElementById('litro')
    var i1 = Number(ni1.value)
    var r9 = i1 / 1000

    if (!i1) return

    res9.innerHTML = `A sua transformação é de <strong>${r9.toFixed(5)}</strong> m³/s.`
}

function calcular10(){
    var nj1 = document.getElementById('velo')
    var nj2 = document.getElementById('area')
    var j1 = Number(nj1.value)
    var j2 = Number(nj2.value)
    var r10 = j1 * j2

    if (!j1 || !j2) return

    res10.innerHTML = `A sua vazão é <strong>${r10.toFixed(5)}</strong>`
}

function calcular11(){
    var nk1 = document.getElementById('x')
    var nk2 = document.getElementById('q')
    var k1 = Number(nk1.value)
    var k2 = Number(nk2.value)
    var r11 = (1.3 * (k1 ** 0.25)) * (Math.sqrt(k2))

    if (!k1 || !k2) return

    res11.innerHTML = `Seu diâmetro econômico é de <strong>${r11.toFixed(4)}</strong> metros.`
}
