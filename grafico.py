import matplotlib.pyplot as plt

# Dados de exemplo - SUBSTITUA PELOS SEUS DADOS REAIS
dificuldades = ['Uso de Mensagens', 'Golpes Online', 'Interfaces Complexas']
frequencia = [45, 60, 35] 

plt.figure(figsize=(10, 6))
plt.bar(dificuldades, frequencia, color='skyblue')
plt.xlabel('Principais Dificuldades com Tecnologia')
plt.ylabel('Frequência (Número de Idosos)')
plt.title('Mapeamento das Dificuldades Tecnológicas')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()