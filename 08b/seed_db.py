from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

engine = create_engine('mysql://root:password123@localhost/si_migration1')

def seed():
    conn = engine.connect()

    metadata = MetaData()

    students_table = Table(
        'students',
        metadata,
        Column('id', Integer, primary_key=True),
        Column('first_name', String(50)),
        Column('last_name', String(50))
    )

    metadata.create_all(engine)

    data = [
        {'id': 1, 'first_name': 'Abdi', 'last_name': 'Mo'}
    ]
    conn.execute(students_table.insert(), data)

    conn.commit()

    conn.close()

seed()
