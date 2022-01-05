import sympy as sp

x = sp.symbols('x')

f = x * x
fin = sp.integrate(f, x)
print('antiderivative of f(x) =', fin )

fin12  = sp.integrate(f, (x, 0, 1))
print('define integral of f(x) from 1 to 2 =' , fin12.evalf())
