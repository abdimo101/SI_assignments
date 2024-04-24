"""create students table

Revision ID: 66a53a8dc499
Revises: 
Create Date: 2024-04-24 17:51:42.346406

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '66a53a8dc499'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    engine = sa.create_engine('mysql://root:password123@localhost/si_migration1')
    conn = engine.connect()

    db_target_engine = op.get_bind()

    students_table_2 = sa.Table(
        'students', sa.MetaData(),
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('first_name', sa.String(50)),
        sa.Column('last_name', sa.String(50))
    )

    students_table_2.create(db_target_engine, checkfirst=True)
    
    students_table = sa.Table('students', sa.MetaData(), autoload_with=conn)
    
    select_query = students_table.select()
    data = conn.execute(select_query).fetchall()

    for row in data:
        db_target_engine.execute(students_table_2.insert().values(row))

    conn.commit()
    conn.close()

def downgrade() -> None:
    pass
